import { StepStatus } from "@/shared/types/test";

type TestStep = {
    question: string;
    answers: string[];
    status: StepStatus;
}

export type TestPageForm = {
    step: TestStep[];
    activeStep: number;
}