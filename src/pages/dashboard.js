import React, {useEffect} from "react"
import { Text } from "react-native"
import { getValue } from "../helpers/asynStorageHelper"

const Dashboard = () => {

	useEffect(() => {
		const token = getValue('token')
	},[])
	
	return(
		<Text>Welcome to dashboard</Text>
	)
}

export default Dashboard