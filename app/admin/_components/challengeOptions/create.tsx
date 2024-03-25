import {
  SimpleForm,
  Create,
  TextInput,
  required,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" validate={[required()]} />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Source" />
        <TextInput source="audioSrc" label="Audio Source" />
      </SimpleForm>
    </Create>
  );
};
