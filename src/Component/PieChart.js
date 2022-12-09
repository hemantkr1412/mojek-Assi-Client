import { Box, Button, TextField, Typography } from '@mui/material';
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export const PieChart = ({ totalInvestment, totalReturn, returnOnInvestment,setIsCalculated}) => {


  return (
    <div>
          <Box 
          display='flex' flexDirection="column" 
          alignItems="center" justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
          maxWidth={800}
          >
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} padding={3}>
        <Chart
        type='donut'
        options={{
            labels: ['Investment amount', 'Estimated Return'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }}
        series={[totalInvestment, returnOnInvestment]}
        width={500}
        height={400}
        />

        <Box>
            <Typography fontFamily={'ui-monospace'}  padding={3} textAlign={'center'}>
                Total Investment: {Number(totalInvestment).toFixed(2)}
            </Typography>
            <Typography fontFamily={'ui-monospace'}  padding={3} textAlign={'center'}>
                Total Return: {Number(totalReturn).toFixed(2)}
            </Typography>
            <Typography fontFamily={'ui-monospace'} padding={3} textAlign={'center'}>
                Return on Investment: {Number(returnOnInvestment).toFixed(2)}
            </Typography>
        </Box>

    </Box>
        <Button
            variant ="contained"
            sx={{borderRadius:3, marginTop:3}}
            color='warning'
            onClick={()=>{
                setIsCalculated(false)
            }} 
            >
            Calculate Again 
        </Button>

        

        </Box>

    </div>
  )
}
