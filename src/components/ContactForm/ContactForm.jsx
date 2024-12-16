import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format must be 123-45-67')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.ContactForm}>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label>
            Number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;



