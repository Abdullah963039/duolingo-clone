import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" validate={[required()]} />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Source" />
        <TextInput source="audioSrc" label="Audio Source" />
      </SimpleForm>
    </Edit>
  );
};
