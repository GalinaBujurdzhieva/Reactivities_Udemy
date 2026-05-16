import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Typography, MenuList, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';

type Props ={
  openForm: () => void
}

export default function ButtonAppBar({openForm} : Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'}}>
        <Container maxWidth='xl'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{display:'flex', gap: 2, alignItems: 'center'}}>
                <Group fontSize='large'/>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}> Reactivities
                </Typography>
            </Box>
            <MenuList sx={{display: 'flex', gap:'20px'}}>
                <MenuItem sx={{fontSize:'1.2', textTransform:'uppercase', fontWeight: 'bold'}}>
                    Activities
                </MenuItem>
                 <MenuItem sx={{fontSize:'1.2', textTransform:'uppercase', fontWeight: 'bold'}}>
                    About
                </MenuItem>
                 <MenuItem sx={{fontSize:'1.2', textTransform:'uppercase', fontWeight: 'bold'}}>
                    Contacts
                </MenuItem>
            </MenuList>
            <Button onClick={openForm} size='large' variant='contained' color='warning'>Create an activity</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

