import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store";
import Skeleton from "./Skeleton";
import {addUser} from "../store";
import Button from "./Button";
import {useThunk} from "../hooks/thunk";
import UsersListItem from "./UsersListItem";
function UsersList() {

    const [doFetchUsers,isLoadingUsers,loadingUsersError]=useThunk(fetchUsers);
    const [doAddUser,isCreatingUser,creatingUserError]=useThunk(addUser);
    const {data} = useSelector((state) => {
        return state.users; // {data , isLoading , error }
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doAddUser();
    };

    let content;
    if (isLoadingUsers) {
        content= <Skeleton times={6} className="h-10 w-full"/>;
    }else
    if (loadingUsersError) {
        content= <div>Error fetching data...</div>;
    }
    else{
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user}></UsersListItem>
        })
    }



    return (<div>
        <div className="flex flex-row justify-between m-3 items-center">
            <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {
                creatingUserError && 'Error creating user'
            }
        </div>
        {content}
    </div>);
}

export default UsersList;