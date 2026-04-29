-- SOGANG-AIMBA7th weekly reaction stats
create table if not exists public.weekly_issue_stats (
  issue_id text primary key,
  views integer not null default 0,
  likes integer not null default 0,
  checks integer not null default 0,
  updated_at timestamptz not null default now()
);

insert into public.weekly_issue_stats (issue_id)
values
  ('vol-4'),
  ('vol-3'),
  ('vol-2'),
  ('vol-1')
on conflict (issue_id) do nothing;

alter table public.weekly_issue_stats enable row level security;

create policy "weekly_issue_stats_select"
on public.weekly_issue_stats
for select
using (true);

create or replace function public.increment_weekly_issue_stat(
  p_issue_id text,
  p_field text,
  p_delta integer default 1
)
returns integer
language plpgsql
security definer
as $$
declare
  new_value integer;
begin
  insert into public.weekly_issue_stats (issue_id)
  values (p_issue_id)
  on conflict (issue_id) do nothing;

  if p_field = 'views' then
    update public.weekly_issue_stats
    set views = greatest(0, views + p_delta),
        updated_at = now()
    where issue_id = p_issue_id
    returning views into new_value;
  elsif p_field = 'likes' then
    update public.weekly_issue_stats
    set likes = greatest(0, likes + p_delta),
        updated_at = now()
    where issue_id = p_issue_id
    returning likes into new_value;
  elsif p_field = 'checks' then
    update public.weekly_issue_stats
    set checks = greatest(0, checks + p_delta),
        updated_at = now()
    where issue_id = p_issue_id
    returning checks into new_value;
  else
    raise exception 'unsupported field: %', p_field;
  end if;

  return new_value;
end;
$$;

grant usage on schema public to anon, authenticated;
grant select on public.weekly_issue_stats to anon, authenticated;
grant execute on function public.increment_weekly_issue_stat(text, text, integer) to anon, authenticated;
