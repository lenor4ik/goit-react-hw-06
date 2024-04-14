import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Додайте цей імпорт
import { nanoid } from 'nanoid';
import css from "../ContactForm/ContactForm.module.css"
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: ''
  };

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(50, 'Too long'),
  number: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(50, 'Too long')
    .matches(/^[0-9]/, 'Must be only digits'),
});
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    dispatch(addContact(newContact));
    resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form  className={css.conactFormContainer}>
          <label>
            <span>Name</span>
          <br />
          <Field type="text" id="name" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" component="p" />
          </label>
            <br />          <label>
          <span>Number</span>
          <br />
          <Field type="text" id="number" name="number" />
            <ErrorMessage className={css.errorMessage} name="number" component="p"  />
        </label>
         <br />
        <button className={css.addBtn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
