import Button from '../../Button'

const MenuItems = ({data,onClick}) => {
  return <Button leftIcon={data.icon} to={data.to} onClick={onClick} rightIcon={data.dark}> 
        {data.title} 
        </Button>
}

export default MenuItems
