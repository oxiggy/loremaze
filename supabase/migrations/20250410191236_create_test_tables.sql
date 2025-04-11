create table "public"."question" (
    "id" uuid not null default gen_random_uuid(),
    "createdAt" timestamp with time zone not null default now(),
    "contentEn" text not null,
    "contentRu" text not null
);


alter table "public"."question" enable row level security;

create table "public"."question_answer" (
    "id" uuid not null default gen_random_uuid(),
    "questionId" uuid not null,
    "createdAt" timestamp with time zone not null default now(),
    "contentEn" text not null,
    "contentRu" text not null,
    "isRight" boolean not null
);


alter table "public"."question_answer" enable row level security;

create table "public"."test" (
    "id" uuid not null default gen_random_uuid(),
    "createdAt" timestamp with time zone not null default now(),
    "titleEn" text not null,
    "titleRu" text not null,
    "contentEn" text not null,
    "contentRu" text not null
);


alter table "public"."test" enable row level security;

create table "public"."test_question" (
    "id" uuid not null default gen_random_uuid(),
    "testId" uuid not null,
    "questionId" uuid not null,
    "createdAt" timestamp with time zone not null default now()
);


alter table "public"."test_question" enable row level security;

CREATE UNIQUE INDEX question_answer_pkey ON public.question_answer USING btree (id);

CREATE UNIQUE INDEX question_pkey ON public.question USING btree (id);

CREATE UNIQUE INDEX test_pkey ON public.test USING btree (id);

CREATE UNIQUE INDEX test_question_pkey ON public.test_question USING btree (id);

alter table "public"."question" add constraint "question_pkey" PRIMARY KEY using index "question_pkey";

alter table "public"."question_answer" add constraint "question_answer_pkey" PRIMARY KEY using index "question_answer_pkey";

alter table "public"."test" add constraint "test_pkey" PRIMARY KEY using index "test_pkey";

alter table "public"."test_question" add constraint "test_question_pkey" PRIMARY KEY using index "test_question_pkey";

alter table "public"."question_answer" add constraint "question_answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES question(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."question_answer" validate constraint "question_answer_questionId_fkey";

alter table "public"."test_question" add constraint "test_question_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES question(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."test_question" validate constraint "test_question_questionId_fkey";

alter table "public"."test_question" add constraint "test_question_testId_fkey" FOREIGN KEY ("testId") REFERENCES test(id) ON UPDATE RESTRICT ON DELETE CASCADE not valid;

alter table "public"."test_question" validate constraint "test_question_testId_fkey";

grant delete on table "public"."question" to "anon";

grant insert on table "public"."question" to "anon";

grant references on table "public"."question" to "anon";

grant select on table "public"."question" to "anon";

grant trigger on table "public"."question" to "anon";

grant truncate on table "public"."question" to "anon";

grant update on table "public"."question" to "anon";

grant delete on table "public"."question" to "authenticated";

grant insert on table "public"."question" to "authenticated";

grant references on table "public"."question" to "authenticated";

grant select on table "public"."question" to "authenticated";

grant trigger on table "public"."question" to "authenticated";

grant truncate on table "public"."question" to "authenticated";

grant update on table "public"."question" to "authenticated";

grant delete on table "public"."question" to "service_role";

grant insert on table "public"."question" to "service_role";

grant references on table "public"."question" to "service_role";

grant select on table "public"."question" to "service_role";

grant trigger on table "public"."question" to "service_role";

grant truncate on table "public"."question" to "service_role";

grant update on table "public"."question" to "service_role";

grant delete on table "public"."question_answer" to "anon";

grant insert on table "public"."question_answer" to "anon";

grant references on table "public"."question_answer" to "anon";

grant select on table "public"."question_answer" to "anon";

grant trigger on table "public"."question_answer" to "anon";

grant truncate on table "public"."question_answer" to "anon";

grant update on table "public"."question_answer" to "anon";

grant delete on table "public"."question_answer" to "authenticated";

grant insert on table "public"."question_answer" to "authenticated";

grant references on table "public"."question_answer" to "authenticated";

grant select on table "public"."question_answer" to "authenticated";

grant trigger on table "public"."question_answer" to "authenticated";

grant truncate on table "public"."question_answer" to "authenticated";

grant update on table "public"."question_answer" to "authenticated";

grant delete on table "public"."question_answer" to "service_role";

grant insert on table "public"."question_answer" to "service_role";

grant references on table "public"."question_answer" to "service_role";

grant select on table "public"."question_answer" to "service_role";

grant trigger on table "public"."question_answer" to "service_role";

grant truncate on table "public"."question_answer" to "service_role";

grant update on table "public"."question_answer" to "service_role";

grant delete on table "public"."test" to "anon";

grant insert on table "public"."test" to "anon";

grant references on table "public"."test" to "anon";

grant select on table "public"."test" to "anon";

grant trigger on table "public"."test" to "anon";

grant truncate on table "public"."test" to "anon";

grant update on table "public"."test" to "anon";

grant delete on table "public"."test" to "authenticated";

grant insert on table "public"."test" to "authenticated";

grant references on table "public"."test" to "authenticated";

grant select on table "public"."test" to "authenticated";

grant trigger on table "public"."test" to "authenticated";

grant truncate on table "public"."test" to "authenticated";

grant update on table "public"."test" to "authenticated";

grant delete on table "public"."test" to "service_role";

grant insert on table "public"."test" to "service_role";

grant references on table "public"."test" to "service_role";

grant select on table "public"."test" to "service_role";

grant trigger on table "public"."test" to "service_role";

grant truncate on table "public"."test" to "service_role";

grant update on table "public"."test" to "service_role";

grant delete on table "public"."test_question" to "anon";

grant insert on table "public"."test_question" to "anon";

grant references on table "public"."test_question" to "anon";

grant select on table "public"."test_question" to "anon";

grant trigger on table "public"."test_question" to "anon";

grant truncate on table "public"."test_question" to "anon";

grant update on table "public"."test_question" to "anon";

grant delete on table "public"."test_question" to "authenticated";

grant insert on table "public"."test_question" to "authenticated";

grant references on table "public"."test_question" to "authenticated";

grant select on table "public"."test_question" to "authenticated";

grant trigger on table "public"."test_question" to "authenticated";

grant truncate on table "public"."test_question" to "authenticated";

grant update on table "public"."test_question" to "authenticated";

grant delete on table "public"."test_question" to "service_role";

grant insert on table "public"."test_question" to "service_role";

grant references on table "public"."test_question" to "service_role";

grant select on table "public"."test_question" to "service_role";

grant trigger on table "public"."test_question" to "service_role";

grant truncate on table "public"."test_question" to "service_role";

grant update on table "public"."test_question" to "service_role";


