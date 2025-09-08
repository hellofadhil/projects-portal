-- CreateEnum
CREATE TYPE "public"."RequirementStatus" AS ENUM ('IN_QUEUE', 'REVIEW', 'REVISION', 'APPROVAL');

-- CreateEnum
CREATE TYPE "public"."ReviewerRole" AS ENUM ('BR', 'SARM');

-- CreateTable
CREATE TABLE "public"."BusinessRequirement" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "as_is_process_rasci_file" TEXT NOT NULL,
    "problem_statement" TEXT NOT NULL,
    "problem_impact" TEXT NOT NULL,
    "root_cause" TEXT NOT NULL,
    "current_solution" TEXT NOT NULL,
    "to_be_solution" TEXT NOT NULL,
    "to_be_process_rasci_kki_file" TEXT NOT NULL,
    "value_creation" TEXT NOT NULL,
    "expected_completion_target" TEXT NOT NULL,
    "improvement_result" TEXT NOT NULL,
    "sign_off_vp_br_sarm" TEXT NOT NULL,
    "status" "public"."RequirementStatus" NOT NULL DEFAULT 'IN_QUEUE',
    "approval_br" BOOLEAN NOT NULL DEFAULT false,
    "approval_sarm" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RequirementReview" (
    "id" UUID NOT NULL,
    "requirementId" UUID NOT NULL,
    "role" "public"."ReviewerRole" NOT NULL,
    "comment" TEXT NOT NULL,
    "requestedChanges" BOOLEAN NOT NULL DEFAULT false,
    "attachment" TEXT,
    "reviewerName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequirementReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RequirementReview_requirementId_role_idx" ON "public"."RequirementReview"("requirementId", "role");

-- CreateIndex
CREATE INDEX "RequirementReview_requirementId_createdAt_idx" ON "public"."RequirementReview"("requirementId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."RequirementReview" ADD CONSTRAINT "RequirementReview_requirementId_fkey" FOREIGN KEY ("requirementId") REFERENCES "public"."BusinessRequirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
