import { createExample } from "@/data-access/example.repo";
import { type createExampleRequestDTO } from "./create-example.schema";

const createExampleUseCase = async (newExample: createExampleRequestDTO) => {
  const newExampleCreated = await createExample(newExample);
  if (!newExampleCreated) {
    throw new Error("Error creating example");
  }

  return newExampleCreated;
};

export default createExampleUseCase;
