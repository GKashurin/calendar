import {AuthActions} from "./auth/actions";
import {EventActions} from "./event/actions";

export const allActionCreators = {
	...AuthActions,
	...EventActions
}