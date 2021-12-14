import { Card, CardContent, Typography } from "@mui/material";

const Activities = () => {
    const groups = JSON.parse(localStorage.getItem("@happyhabits:group")) || {};
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {groups.activities.map((item) =>
                <Card key={item.id} sx={{ margin: "1%", width: "30%" }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
export default Activities;