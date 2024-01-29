// const App = () => {
//   const [submitedData, setSubmitedData] = React.useState(null);

//   return (
//     <>
//       <Form submitData={setSubmitedData} />
//       <p class="submitted-data">SUBMITED DATA: {submitedData}</p>
//     </>
//   );
// };

// const Form = ({ submitData }) => {
//   const handleSubmitForm = evt => {
//     evt.preventDefault();
//     const formData = new FormData(evt.target);
//     const tag = [...formData.entries()].map(item => `${item[0]}: ${item[1]}`).join(' | ');

//     submitData(tag);
//   };

//   return (
//     <form onSubmit={handleSubmitForm} class="form">
//       <ControlledField fieldName={'name'} schemaValidation={{ type: 'string', minLength: 6 }} />
//       <ControlledField fieldName={'email'} schemaValidation={{ type: 'email' }} />
//       <button type="submit" class="button">
//         SUBMIT
//       </button>
//     </form>
//   );
// };

// const ControlledField = ({ fieldName, schemaValidation }) => {
//   const [value, setValue] = React.useState('');
//   const [error, setError] = React.useState(null);

//   const handleChange = evt => {
//     const isValid = validator(evt.target.value, schemaValidation);

//     if (typeof isValid === 'string') {
//       setError(isValid);
//     } else {
//       setError(null);
//     }

//     setValue(evt.target.value);
//   };

//   return (
//     <div className="label-container">
//       <label class="label">
//         {`${fieldName.toUpperCase()}: `}
//         <input name={fieldName} value={value} onChange={handleChange} class="input" />
//         <p className="error">{error}</p>
//       </label>
//     </div>
//   );
// };

// function validator(value, schema) {
//   if (!schema) {
//     return true;
//   }

//   const checks = {
//     type: function (value, check) {
//       if (check !== 'email') {
//         return typeof value === check ? true : `value isn't a ${check}`;
//       }
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : `value isn't a ${check}`;
//     },

//     minLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length >= check ? true : `value should be more than ${check} symbol`;
//     },

//     maxLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length <= check ? true : `value should be less than ${check} symbol`;
//     },
//   };

//   const typeOfChecks = Object.keys(schema);

//   const isValid = typeOfChecks.reduce((answer, key) => {
//     if (answer !== true) {
//       return answer;
//     }
//     return (answer = checks[key](value, schema[key]));
//   }, true);

//   return isValid;
// }

// ReactDOM.render(<App />, document.getElementById('app'));

// const App = () => {
// const [submitedData, setSubmitedData] = React.useState(null);

//   return (
//     <>
//     <Form submitData = {setSubmitedData} />
//      <p class = "submitted-data">SUBMITED DATA: {submitedData}</p>
//     </>
//   );
// }

// const initialFields = {
//   name: {
//     value: "",
//     error:null,
//     schemaValidation: {type: "string", minLength: 6 }
//   },
//   email: {
//     value: "",
//     error:null,
//     schemaValidation: {type: "email"}
//   }

// }

// const Form = ({submitData}) => {

//   const [fields, setFields] = React.useState(initialFields);

//   const handleChange = (evt) => {
//    const {name, value} = evt.target;

//     const isValid = validator(value, fields[name].schemaValidation);

//       if (typeof isValid === 'string') {
//        setFields(prevFields => ({...prevFields, [name]:{...prevFields[name], value: value, error: isValid}}));
//       } else {
//        setFields(prevFields => ({...prevFields, [name]:{...prevFields[name], value: value, error: null}}));
//       }

//   }

//   const handleSubmitForm = (evt) => {
//     evt.preventDefault();

//     if (fields.)

//     const tag = Object.keys(fields).map(key => `${key}: ${fields[key].value}`).join(" | ");
//     submitData(tag);
//     }

//  return(
//  <form onSubmit = {handleSubmitForm} class = "form">
//     <CustomField fieldName = {"name"} value = {fields.name} handleChange = {handleChange} />
//     <CustomField fieldName = {"email"} value = {fields.email} handleChange = {handleChange} />
//     <button type = "submit" class = "button">SUBMIT</button>
//      <p>{fields.name.error}</p>
//  </form>);
// }

// const CustomField = ({fieldName, value: {value, error}, handleChange}) => {

//   return (
//   <div className="label-container">
//     <label class = "label">
//       {`${fieldName.toUpperCase()}: `}
//       <input name={fieldName} value={value} onChange={handleChange} class="input"/>
//        <p className="error">{error}</p>
//      </label>
//    </div>
//   )
// }

// function validator(value, schema) {
//   if (!schema) {
//     return true;
//   }

//   const checks = {
//     type: function (value, check) {
//       if (check !== 'email') {
//         return typeof value === check ? true : `value isn't a ${check}`;
//       }
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : `value isn't a ${check}`;
//     },

//     minLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length >= check ? true : `value should be more than ${check} symbol`;
//     },

//     maxLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length <= check ? true : `value should be less than ${check} symbol`;
//     },
//   };

//   const typeOfChecks = Object.keys(schema);

//   const isValid = typeOfChecks.reduce((answer, key) => {
//     if (answer !== true) {
//       return answer;
//     }
//     return (answer = checks[key](value, schema[key]));
//   }, true);

//   return isValid;
// }

// ReactDOM.render(<App />, document.getElementById('app'));

//lasttttttttttttttttttttttttttttttttt

// const App = () => {
//   const [submitedData, setSubmitedData] = React.useState(null);

//   return (
//     <>
//       <Form submitData={setSubmitedData} />
//       <p class="submitted-data">SUBMITED DATA: {submitedData}</p>
//     </>
//   );
// };

// const initialFields = {
//   name: {
//     value: '',
//     error: null,
//     schemaValidation: { type: 'string', minLength: 6 },
//   },
//   email: {
//     value: '',
//     error: null,
//     schemaValidation: { type: 'email' },
//   },
// };

// const Form = ({ submitData }) => {
//   const [fields, setFields] = React.useState(initialFields);

//   const handleChange = evt => {
//     const { name, value } = evt.target;

//     const isValid = validator(value, fields[name].schemaValidation);

//     if (typeof isValid === 'string') {
//       setFields(prevFields => ({
//         ...prevFields,
//         [name]: { ...prevFields[name], value, error: isValid },
//       }));
//     } else {
//       setFields(prevFields => ({
//         ...prevFields,
//         [name]: { ...prevFields[name], value, error: null },
//       }));
//     }
//   };

//   const handleSubmitForm = evt => {
//     evt.preventDefault();

//     const tag = Object.keys(fields)
//       .map(key => `${key}: ${fields[key].value}`)
//       .join(' | ');
//     submitData(tag);
//   };

//   return (
//     <form onSubmit={handleSubmitForm} class="form">
//       <CustomField fieldName={'name'} value={fields.name} handleChange={handleChange} />
//       <CustomField fieldName={'email'} value={fields.email} handleChange={handleChange} />
//       <button type="submit" class="button">
//         SUBMIT
//       </button>
//       <p>{fields.name.error}</p>
//     </form>
//   );
// };

// const CustomField = ({ fieldName, value: { value, error }, handleChange }) => {
//   return (
//     <div className="label-container">
//       <label class="label">
//         {`${fieldName.toUpperCase()}: `}
//         <input name={fieldName} value={value} onChange={handleChange} class="input" />
//         <p className="error">{error}</p>
//       </label>
//     </div>
//   );
// };

// function validator(value, schema) {
//   if (!schema) {
//     return true;
//   }

//   const checks = {
//     type: function (value, check) {
//       if (check !== 'email') {
//         return typeof value === check ? true : `value isn't a ${check}`;
//       }
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : `value isn't a ${check}`;
//     },

//     minLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length >= check ? true : `value should be more than ${check} symbol`;
//     },

//     maxLength: function (value, check) {
//       if (typeof value !== 'string') {
//         return `value isn't a string`;
//       }
//       return value?.length <= check ? true : `value should be less than ${check} symbol`;
//     },
//   };

//   const typeOfChecks = Object.keys(schema);

//   const isValid = typeOfChecks.reduce((answer, key) => {
//     if (answer !== true) {
//       return answer;
//     }
//     return (answer = checks[key](value, schema[key]));
//   }, true);

//   return isValid;
// }

// ReactDOM.render(<App />, document.getElementById('app'));
