import { Link } from 'react-router-dom'
import './AboutUs.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>My name is Diya Jolie Mohan. I am a 3rd year student at NYU. I am majoring in Computer Science. My hobbies include cooking, running, poetry, and dancing. This year I will start work at New York Life Insurance. I am looking forward to graduating this Spring. </p>
      <img src="me.JPG" alt="a picture of me">
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
