const employeeForm = (state) => state.employeeForm;
const employees = (state) => state.employees;

export const token = (state) => state.auth.token;

export const submitting = (state) => employeeForm(state).submitting;

export const employee = (state) => ({
  name: employeeForm(state).name,
  phone: employeeForm(state).phone,
  shift: employeeForm(state).shift
});

export const employeeList = (state) => {
  const data = employees(state).data;

  return Object.keys(data).map(uid => ({ uid, ...data[uid] }));
};

export const fetching = (state) => employees(state).fetching;
