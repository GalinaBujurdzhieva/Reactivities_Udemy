import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { SubmitEvent } from "react";

type Props ={
    closeForm: () => void
    activity?: Activity
    submitForm: (activity: Activity) => void
}

export default function ActivityForm({closeForm, activity, submitForm}: Props) {
  
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const data = {} as Partial<Activity>;
    formData.forEach((value, key) => { data[key as keyof Activity] = value as never });

    if (activity) data.id = activity.id
    submitForm(data as unknown as Activity)
  }

  return (
    <Paper sx={{padding:3}}> 
    <Typography variant="h5" gutterBottom color="primary"> Create an activity</Typography>
    <Box onSubmit={handleSubmit} component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb:3 }}>
        <TextField name='title' label='Title' defaultValue={activity?.title}/>
        <TextField name='description' label='Description' defaultValue={activity?.description} multiline rows={3}/>
        <TextField name='category' label='Category' defaultValue={activity?.category}/>
        <TextField name='date' label='Date' defaultValue={activity?.date} type="date"/>
        <TextField name='city' label='City' defaultValue={activity?.city}/>
        <TextField name='venue' label='Venue' defaultValue={activity?.venue}/>
        <Box sx={{display:'flex', justifyContent:'end', gap:3}}>
            <Button onClick={closeForm} color='primary'>Cancel</Button>
            <Button color='success' variant='contained' type='submit'>Submit</Button>
        </Box>
    </Box>
    </Paper>
  )
}
