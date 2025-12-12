import ComboBox from "./components/ComboBox"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function App() {
 

  return (
    <>
      <ComboBox/>
      <SimpleBadge/>
    </>
  )
}

export default App



export  function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
