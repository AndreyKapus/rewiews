import {FindInput, FindInputWrapper, FindInputLabel} from './FindContacts.styled'

const FindContact = ({onChangeFilter}) => {
    return (
      <FindInputWrapper>
        <FindInputLabel>
          <FindInput type="text" onChange={onChangeFilter}/>
          Search
        </FindInputLabel>
      </FindInputWrapper>
    )
  }
  
  export default FindContact