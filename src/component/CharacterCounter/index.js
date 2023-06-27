import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Display from '../Display'
import {
  MainContainer,
  OutputContainer,
  Heading,
  Image,
  InputContainer,
  CounterHeading,
  InputBtnContainer,
  Button,
  Input,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {inputs: '', countValues: []}

  onChangeInput = event => {
    this.setState({inputs: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {inputs} = this.state

    const newWord = {
      id: uuidV4(),
      word: inputs,
    }

    this.setState(prevState => ({
      countValues: [...prevState.countValues, newWord],
      inputs: '',
    }))
  }

  render() {
    const {countValues, inputs} = this.state
    const lengthOfArray = countValues.length !== 0
    return (
      <MainContainer>
        <OutputContainer>
          <Heading>Count the characters like a Boss...</Heading>
          {lengthOfArray ? (
            <ul>
              <InputBtnContainer>
                {countValues.map(eachWord => (
                  <Display key={eachWord.id} wordDetails={eachWord} />
                ))}
              </InputBtnContainer>
            </ul>
          ) : (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </OutputContainer>
        <InputContainer>
          <CounterHeading>Character Counter</CounterHeading>
          <form onSubmit={this.onClickButton}>
            <Input
              type="text"
              value={inputs}
              onChange={this.onChangeInput}
              placeholder="Enter the Characters Here"
            />
            <Button type="submit">Add</Button>
          </form>
        </InputContainer>
      </MainContainer>
    )
  }
}

export default CharacterCounter
