import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { useActivities } from "../../providers/activities";

export default function PinnedSubheaderList({ atividades }) {
    const { activitieDelete } = useActivities();

    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                height: "80%",
                textAlign: "center",
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >
            {atividades.map((item) => (
                <li key={`section-${item}`}>
                    <ul>
                        <ListSubheader>{item.title}</ListSubheader>
                        <ListItem sx={{ justifyContent: "center" }}>
                            <Button
                                color="grey"
                                size="small"
                                onClick={() => {
                                    activitieDelete(item.id);
                                }}>
                                <DeleteForeverIcon />
                            </Button>
                        </ListItem>
                        <hr />
                    </ul>
                </li>
            ))}
        </List>
    );
}