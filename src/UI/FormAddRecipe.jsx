import { ImCloudUpload } from 'react-icons/im';

import FormColumn from './FormColumn';
import FormRow from './FormRow';
import Button from './Button';

const FormAddRecipe = ({ onClose }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onClose?.();
  };

  const input =
    'text-base py-2 px-[10px] border-solid border-[1px] border-gray-300 rounded-md transition-all duration-200 placeholder:text-greylight3 focus:outline-none focus:text-primary focus:bg-greylight1';

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-10 gap-y-10"
    >
      <FormColumn heading="RECIPE DATA">
        <FormRow htmlfor="title" label="Title">
          <input
            id="title"
            className={input}
            value="TEST23"
            required
            name="title"
            type="text"
          />
        </FormRow>

        <FormRow htmlfor="sourceUrl" label="URL">
          <input
            className={input}
            value="TEST23"
            required
            id="sourceUrl"
            name="sourceUrl"
            type="text"
          />
        </FormRow>

        <FormRow htmlfor="image" label="Image URL">
          <input
            className={input}
            value="TEST23"
            required
            id="image"
            name="image"
            type="text"
          />
        </FormRow>

        <FormRow htmlfor="publisher" label="publisher">
          <input
            className={input}
            value="TEST23"
            required
            id="publisher"
            name="publisher"
            type="text"
          />
        </FormRow>

        <FormRow htmlfor="cookingTime" label="Prep time">
          <input
            className={input}
            value="23"
            required
            id="cookingTime"
            name="cookingTime"
            type="number"
          />
        </FormRow>

        <FormRow htmlfor="servings" label="Servings">
          <input
            className={input}
            value="23"
            required
            id="servings"
            name="servings"
            type="number"
          />
        </FormRow>
      </FormColumn>

      <FormColumn heading="Ingredients">
        <FormRow htmlfor="ingredient-1" label="Ingredient 1">
          <input
            className={input}
            value="0.5,kg,Rice"
            type="text"
            required
            id="ingredient-1"
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
        <FormRow htmlfor="ingredient-2" label="Ingredient 2">
          <input
            className={input}
            value="1,,Avocado"
            type="text"
            id="ingredient-2"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
        <FormRow htmlfor="ingredient-3" label="Ingredient 3">
          <input
            className={input}
            value=",,salt"
            type="text"
            id="ingredient-3"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
        <FormRow htmlfor="ingredient-4" label="Ingredient 4">
          <input
            className={input}
            type="text"
            id="ingredient-4"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
        <FormRow htmlfor="ingredient-5" label="Ingredient 5">
          <input
            className={input}
            type="text"
            id="ingredient-5"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
        <FormRow htmlfor="ingredient-6" label="Ingredient 6">
          <input
            className={input}
            type="text"
            id="ingredient-6"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </FormRow>
      </FormColumn>
      <div className="col-span-full flex justify-center">
        <Button>
          <ImCloudUpload className="fill-white" />
          <span>Upload</span>
        </Button>
      </div>
    </form>
  );
};

export default FormAddRecipe;
