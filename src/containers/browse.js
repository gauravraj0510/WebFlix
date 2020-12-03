import React, { useState, useContext} from 'react';
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({ slides}){
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    
    return <SelectProfileContainer user={user} setProfile={setProfile}/>
}