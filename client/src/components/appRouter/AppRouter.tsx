import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/Dashboard";
import { Calendar } from "../../pages/calendar/Calendar";
import { Mail } from "../../pages/mail/Mail";
import { Todo } from "../../pages/todo/Todo";
import { Contacts } from "../../pages/contacts/Contacts";
import { MenuBar } from "../menu/MenuBar";
import { Login } from "../../pages/login/Login";

export const AppRouter = () => {
    return (
        <>
            <MenuBar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/mail' element={<Mail />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </>
    )
}