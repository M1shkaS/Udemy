// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

// 1
// const validate = values => {
//    const errors = {};

//    if (!values.name) {
//       errors.name = 'Обязательное поле'
//    } else if (values.name.length < 2) {
//       errors.name = ' Должно быть больше 2 символов'
//    }

//    if (!values.email) {
//       errors.email = 'Обязательное поле'
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = 'Неправильный email'
//    }

//    return errors;
// }

// const Form = () => {
//    const formik = useFormik({
//       initialValues: {
//          name: '',
//          email: '',
//          amount: 0,
//          currency: '',
//          text: '',
//          terms: false
//       },
//       validate,
//       onSubmit: values => console.log(JSON.stringify(values, null, 2))
//    })

//    return (
//       <form className="form" onSubmit={formik.handleSubmit}>
//          <h2>Отправить пожертвование</h2>
//          <label htmlFor="name">Ваше имя</label>
//          <input
//             id="name"
//             name="name"
//             type="text"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
//          <label htmlFor="email">Ваша почта</label>
//          <input
//             id="email"
//             name="email"
//             type="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
//          <label htmlFor="amount">Количество</label>
//          <input
//             id="amount"
//             name="amount"
//             type="number"
//             value={formik.values.amount}
//             onChange={formik.handleChange}
//          />
//          <label htmlFor="currency">Валюта</label>
//          <select
//             id="currency"
//             name="currency"
//             value={formik.values.amount}
//             onChange={formik.handleChange}>
//             <option value="">Выберите валюту</option>
//             <option value="USD">USD</option>
//             <option value="UAH">UAH</option>
//             <option value="RUB">RUB</option>
//          </select>-
//          <label htmlFor="text">Ваше сообщение</label>
//          <textarea
//             id="text"
//             name="text"
//             value={formik.values.text}
//             onChange={formik.handleChange}
//          />
//          <label className="checkbox">
//             <input name="terms" type="checkbox"
//                value={formik.values.terms}
//                onChange={formik.handleChange} />
//             Соглашаетесь с политикой конфиденциальности?
//          </label>
//          <button type="submit">Отправить</button>
//       </form>
//    )
// }

// 2
// const Form = () => {
//    const formik = useFormik({
//       initialValues: {
//          name: '',
//          email: '',
//          amount: 0,
//          currency: '',
//          text: '',
//          terms: false
//       },
//       validationSchema: Yup.object({
//          name: Yup.string()
//             .required('Обязательное поле')
//             .min(2, 'Должно быть больше 2 символов'),
//          email: Yup.string()
//             .required('Обязательное поле')
//             .email('Неправильный emaill'),
//          amount: Yup.number()
//             .required('Обязательное поле')
//             .min(5, 'Минимум 5'),
//          currency: Yup.string()
//             .required('Выберите валюту'),
//          text: Yup.string()
//             .required('Обязательное поле')
//             .min(10, 'Не менее 10'),
//          terms: Yup.boolean()
//             .required('Обязательно согласие')
//             .oneOf([true], 'Необходимо согласие'),
//       }),
//       onSubmit: values => console.log(JSON.stringify(values, null, 2))
//    })

//    return (
//       <form className="form" onSubmit={formik.handleSubmit}>
//          <h2>Отправить пожертвование</h2>
//          <label htmlFor="name">Ваше имя</label>
//          <input
//             id="name"
//             name="name"
//             type="text"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
//          <label htmlFor="email">Ваша почта</label>
//          <input
//             id="email"
//             name="email"
//             type="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
//          <label htmlFor="amount">Количество</label>
//          <input
//             id="amount"
//             name="amount"
//             type="number"
//             value={formik.values.amount}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
//          <label htmlFor="currency">Валюта</label>
//          <select
//             id="currency"
//             name="currency"
//             value={formik.values.amount}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          >
//             <option value="">Выберите валюту</option>
//             <option value="USD">USD</option>
//             <option value="UAH">UAH</option>
//             <option value="RUB">RUB</option>
//          </select>
//          {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
//          <label htmlFor="text">Ваше сообщение</label>
//          <textarea
//             id="text"
//             name="text"
//             value={formik.values.text}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//          />
//          {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
//          <label className="checkbox">
//             <input name="terms" type="checkbox"
//                value={formik.values.terms}
//                onChange={formik.handleChange}
//                onBlur={formik.handleBlur} />
//             Соглашаетесь с политикой конфиденциальности?
//          </label>
//          {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
//          <button type="submit">Отправить</button>
//       </form>
//    )
// }

// 3
const MyTextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <>
         <label htmlFor={props.name}>{label}</label>
         <input  {...props} {...field} />
         {meta.error && meta.touched ? <div className='error'> {meta.error}</div> : null}
      </>
   )
}
// Зачем нам  type: 'checkbox'  в  useField
const MyCheckBox = ({ children, ...props }) => {
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
      <>
         <label className="checkbox">
            {<input type='checkbox'  {...props} {...field} />}
            {children}
         </label>

         {meta.error && meta.touched ? <div className='error'> {meta.error}</div> : null}
      </>
   )
}

const FormCustom = () => {

   return (
      <Formik
         initialValues={{
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
         }}
         validationSchema={
            Yup.object({
               name: Yup.string()
                  .required('Обязательное поле')
                  .min(2, 'Должно быть больше 2 символов'),
               email: Yup.string()
                  .required('Обязательное поле')
                  .email('Неправильный emaill'),
               amount: Yup.number()
                  .required('Обязательное поле')
                  .min(5, 'Минимум 5'),
               currency: Yup.string()
                  .required('Выберите валюту'),
               text: Yup.string()
                  .required('Обязательное поле')
                  .min(10, 'Не менее 10'),
               terms: Yup.boolean()
                  .required('Обязательно согласие')
                  .oneOf([true], 'Необходимо согласие'),
            })
         }
         onSubmit={values => console.log(JSON.stringify(values, null, 2))}
      >
         <Form className="form">
            <h2>Отправить пожертвование</h2>
            <MyTextInput
               label='Ваше имя'
               id="name"
               name="name"
               type="text" />
            <MyTextInput
               label='Ваша почта'
               id="email"
               name="email"
               type="email" />
            <MyTextInput
               label='Количество'
               id="amount"
               name="amount"
               type="number" />
            <label htmlFor="currency">Валюта</label>
            <Field
               as='select'
               id="currency"
               name="currency"
            >
               <option value="">Выберите валюту</option>
               <option value="USD">USD</option>
               <option value="UAH">UAH</option>
               <option value="RUB">RUB</option>
            </Field>
            <ErrorMessage className="error" name="currency" component='div' />
            <label htmlFor="text">Ваше сообщение</label>
            <Field
               id="text"
               name="text"
               as='textarea'
            />
            <ErrorMessage className="error" name="text" component='div' />
            <MyCheckBox name="terms">
               Соглашаетесь с политикой конфиденциальности?
            </MyCheckBox>

            <button type="submit">Отправить</button>
         </Form>
      </Formik>

   )
}
// const FormCustom = () => {

//    return (
//       <Formik
//          initialValues={{
//             name: '',
//             email: '',
//             amount: 0,
//             currency: '',
//             text: '',
//             terms: false
//          }}
//          validationSchema={
//             Yup.object({
//                name: Yup.string()
//                   .required('Обязательное поле')
//                   .min(2, 'Должно быть больше 2 символов'),
//                email: Yup.string()
//                   .required('Обязательное поле')
//                   .email('Неправильный emaill'),
//                amount: Yup.number()
//                   .required('Обязательное поле')
//                   .min(5, 'Минимум 5'),
//                currency: Yup.string()
//                   .required('Выберите валюту'),
//                text: Yup.string()
//                   .required('Обязательное поле')
//                   .min(10, 'Не менее 10'),
//                terms: Yup.boolean()
//                   .required('Обязательно согласие')
//                   .oneOf([true], 'Необходимо согласие'),
//             })
//          }
//          onSubmit={values => console.log(JSON.stringify(values, null, 2))}
//       >
//          <Form className="form">
//             <h2>Отправить пожертвование</h2>
//             <label htmlFor="name">Ваше имя</label>
//             <Field
//                id="name"
//                name="name"
//                type="text"
//             />
//             <ErrorMessage className="error" name="name" component='div' />
//             <label htmlFor="email">Ваша почта</label>
//             <Field
//                id="email"
//                name="email"
//                type="email"
//             />
//             <ErrorMessage className="error" name="email" component='div' />
//             <label htmlFor="amount">Количество</label>
//             <Field
//                id="amount"
//                name="amount"
//                type="number"
//             />
//             <ErrorMessage className="error" name="amount" component='div' />
//             <label htmlFor="currency">Валюта</label>
//             <Field
//                as='select'
//                id="currency"
//                name="currency"
//             >
//                <option value="">Выберите валюту</option>
//                <option value="USD">USD</option>
//                <option value="UAH">UAH</option>
//                <option value="RUB">RUB</option>
//             </Field>
//             <ErrorMessage className="error" name="currency" component='div' />
//             <label htmlFor="text">Ваше сообщение</label>
//             <Field
//                id="text"
//                name="text"
//                as='textarea'
//             />
//             <ErrorMessage className="error" name="text" component='div' />
//             <label className="checkbox">
//                <Field name="terms"
//                   type="checkbox" />
//                Соглашаетесь с политикой конфиденциальности?
//             </label>
//             <ErrorMessage className="error" name="terms" component='div' />
//             <button type="submit">Отправить</button>
//          </Form>
//       </Formik>

//    )
// }


export default FormCustom;