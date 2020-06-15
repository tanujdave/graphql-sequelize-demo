import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const AddRestaurantButton = styled.button`
  border: 1px dashed #aaa;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
  background: #fff;
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  margin: 0.25rem 0;
`;

const TextField = styled.input`
  border: 0;
  border-bottom: 0.125rem solid #ccc;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25rem;

  :focus {
    border-bottom-color: #aaa;
    outline: none;
  }
`;

interface AddRestaurantProps {
  onAddRestaurant: ({ name }: { name: string }) => Promise<void>;
}

const AddRestaurant = ({
  onAddRestaurant: pushAddRestaurant,
}: AddRestaurantProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const {
    formState: { isValid, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({ mode: "onChange" });

  if (!isAdding) {
    return (
      <Wrapper>
        <AddRestaurantButton onClick={() => setIsAdding(true)}>
          + Add Restaurant
        </AddRestaurantButton>
      </Wrapper>
    );
  }

  const onSubmit = handleSubmit(async ({ name }) => {
    await pushAddRestaurant({ name });
    reset();
    setIsAdding(false);
  });

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <TextField
          autoFocus
          disabled={isSubmitting}
          name="name"
          type="text"
          ref={register({ required: true })}
        />
        <button disabled={isSubmitting || !isValid} type="submit">
          Add
        </button>
      </form>
    </Wrapper>
  );
};

export default AddRestaurant;
