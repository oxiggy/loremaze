create policy "Enable read access for all users"
on "public"."question"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."question_answer"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."test"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."test_question"
as permissive
for select
to public
using (true);



