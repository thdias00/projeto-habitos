import { useState } from "react";
import Input from "../Input";
import ComponentButton from "../Button";
import { useActivities } from "../../providers/activities";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const ActivitieForm = ({ groupId }) => {
    const { activitieCreate } = useActivities();
    const [valor, setValor] = useState("");
    const formSchema = yup.object().shape({
        title: yup.string().required('Título obrigatório'),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    })
    function addActivitie(data) {
        data.group = groupId;
        data.realization_time = "2021-03-10T15:00:00Z";
        activitieCreate(data, groupId)
        setValor("");
    }
    return (
        <>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(addActivitie)}>
                <Input
                    placeholder="Título da Atividade"
                    type="text"
                    variant="standard"
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}
                    register={register}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    name="title"
                />
                <ComponentButton type="submit">Adicionar</ComponentButton>
            </form>
        </>
    )
}

export default ActivitieForm;