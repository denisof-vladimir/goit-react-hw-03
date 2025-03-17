import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { object, string, number, date } from 'yup';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be min 3 chars')
    .required('This field is required'),
  number: Yup.string()
  .min(5, 'Must be min 5 chars')
  .required('This field is required'),
});

export default function ContactForm({handleSubmit}) {

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name  : </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
        </div>

        <div className={css.group}>
          <label className={css.label}>Number : </label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>     

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
 