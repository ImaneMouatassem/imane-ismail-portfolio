import { useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { CardMedia, IconButton, Tooltip } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LoadingButton from '@mui/lab/LoadingButton';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import { useRef } from 'react';

import IsmailProfile from "../../../assets/ProfileImages/ismail-ben-alla-1.jpg";
import ImaneProfile from "../../../assets/ProfileImages/imane-moutassem-1.jpg";
import ismailVoice from "../../../assets/audio/ismail-voice.mp3";
import imaneVoice from "../../../assets/audio/imane-voice.mp3";



export default function TeamCard({ data }) {
    const [loadingCV, setLoadingCV] = useState(false);
    const [speak, setSpeak] = useState(false);
    const audioRef = useRef(null);

    const DownloadCv = (url) => {
        setLoadingCV(() => true);
        fetch("./files/" + url).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = url;
                alink.click();
                setTimeout(() => {
                    setLoadingCV(() => false);
                }, 3000)
            })
        })
    }

    const SpeachHandler = () => {
        setSpeak(prev => !prev);
        if (!speak) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flex: 1,
                p: 1,
                flexDirection: data.isLTR ? {
                    xs: 'column-reverse',
                    sm: 'row-reverse',
                } : {
                    xs: 'column',
                    sm: 'row',
                },
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    width="200px"
                    height="300px"
                    alt="Ismail ben alla"
                    src={data.isIsmail ? IsmailProfile : ImaneProfile}
                    sx={{
                        borderRadius: 0.6,
                        width: { xs: '40%', sm: 240 },
                        height: { xs: 'auto', sm: 300 },
                        mr: { sm: 1.5 },
                        mb: { xs: 1.5, sm: 1 },
                    }}
                />

                {/* -------------< say something >------------ */}
                <audio src={data.isIsmail ? ismailVoice : imaneVoice} ref={audioRef} />
                <IconButton
                    onClick={SpeachHandler}
                    sx={{
                        color: '#000d',
                        position: 'absolute',
                        top: '0.8rem',
                        left: '0.8rem',
                        padding: '4px',
                    }}>
                    {speak ? <RecordVoiceOverIcon /> : <VoiceOverOffIcon />}
                </IconButton>
                {/* -------------< say something >------------ */}
            </Box>
            <Box
                sx={
                    {
                        alignSelf: 'start',
                        ml: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                    }
                }
            >
                <Box>
                    <Typography variant="h1" style={{
                        fontSize: '26px',
                        textTransform: 'uppercase',
                        fontFamily: "cursive",
                    }} color="text.secondary">
                        {data.name}
                    </Typography>
                    <Typography variant="h6" style={{
                        textTransform: 'uppercase',
                        color: '#111', margin: '0',
                        marginBottom: '1rem', padding: '0',
                        fontSize: 'x-small',
                        fontFamily: "cursive",
                    }} color="text.secondary">
                        {data.profession}
                    </Typography>
                    <Typography variant="dev" color='dark' style={{ marginRight: '0.3rem', fontFamily: "monospace" }}>
                        {data.description}
                    </Typography>
                </Box>
                <Box
                    sx={
                        {
                            alignSelf: data.isLTR ? 'start' : 'end',
                        }
                    }>
                    <Tooltip title={`Resume of ${data.name}`}>
                        <LoadingButton
                            sx={{
                                color: "#000",
                                borderColor: '#000',
                                margin: '0.5rem',
                                padding: "0.5rem 1rem",
                                marginBottom: '0.4rem',
                                marginRight: '0.4rem',
                                borderRadius: '1rem',
                            }}
                            onClick={() => DownloadCv(data.url)}
                            loading={loadingCV}
                            loadingPosition="end"
                            endIcon={<CloudDownloadIcon />}
                            variant="outlined"
                        >
                            <span>DownLoad CV</span>
                        </LoadingButton>
                    </Tooltip>
                </Box>
            </Box>
        </Card >
    );
}