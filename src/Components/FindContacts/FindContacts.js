import {FindInput, FindInputWrapper, FindInputLabel} from './FindContacts.styled'

const FindContact = ({onChangeFilter}) => {
    return (
      <FindInputWrapper>
        <FindInputLabel>
          <FindInput type="text" onChange={onChangeFilter}/>
          
        </FindInputLabel>
      </FindInputWrapper>
    )
  }
  
  export default FindContact