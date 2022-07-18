import {Formik,Form} from 'formik'
import Input from './components/Input'
import * as Yup from 'yup'
import {Container,FormContainer} from './components/Containers'
import Button from './components/Button'
import predictStatus from './utils/PredictStatus'
import swal from 'sweetalert'

function App() {

  const handleSubmit=({plate,date,time})=>{
    const result = predictStatus(plate,new Date(date),time);
    swal('Result',result);
  }

  return (
      <Container>
        <FormContainer>
          <h1 style={{color:"white",fontSize:'2.8em'}}>PICO Y PLACA PREDICTOR</h1>
          <Formik
          initialValues={{plate:'',date:'',time:''}}
          onSubmit ={handleSubmit}
          validationSchema={Yup.object({
            plate: Yup.string()
            .matches(/[aA-zZ][aA-zZ][aA-zZ]-[0-9][0-9][0-9][0-9]/,'Invalid plate, format must be like: PBO-1111')
            .test('len', 'Must be exactly xxx-xxxx', val => val.length === 8)
            .required('A license plate is required'),
            date: Yup.date('Date format must be YYYY/MM/DD')
            .required('A date is required to predict the status')
            .typeError('Invalid date, format must be like 1990/09/09'),
            time: Yup.string()
            .matches(/[0-9][0-9]:[0-9][0-9]/,'Not a valid hour, format must be HH:MM')
            .test('len', 'Must be exactly xx:xx', val => val.length === 5)
            .required('An hour is required to predict the status')
          })}
          >
            <Form>
              <Input name="plate" label='Type your license plate' placeholder='XXX-XXXX'></Input>
              <Input name="date" label='What day are you looking for?' placeholder='YYYY/MM/DD'></Input>
              <Input name="time" label='What hour? (24h Format)' placeholder='00:00'></Input>
              <Button type='submit'>Find out</Button>
            </Form>
          </Formik>
        </FormContainer>
      </Container>
  );
}

export default App;
