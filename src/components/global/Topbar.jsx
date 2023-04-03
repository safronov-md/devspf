import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext} from "../../theme";
import {LightModeOutlined} from "@mui/icons-material";
import {DarkModeOutlined} from "@mui/icons-material";
import {NotificationsOutlined} from "@mui/icons-material";
import {SettingsOutlined} from "@mui/icons-material";
import {PersonOutlined} from "@mui/icons-material";

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display={"flex"} justifyContent={"flex-end"} p={2}>
            {/* ICONS */}
            <Box displat={"flex"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <LightModeOutlined/>
                    ):(<DarkModeOutlined/>)}

                </IconButton>
                <IconButton>
                    <NotificationsOutlined/>
                </IconButton>
                <IconButton>
                    <SettingsOutlined/>
                </IconButton>
                <IconButton>
                    <PersonOutlined/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;