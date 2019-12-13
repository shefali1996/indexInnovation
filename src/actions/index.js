import { createAction } from 'redux-actions';
import * as constants from "./constants"

export const sendContactDetailRequest=createAction(constants.SEND_CONTACT_DETAIL_REQUEST)
export const sendContactDetailSuccess=createAction(constants.SEND_CONTACT_DETAIL_SUCCESS)
export const sendContactDetailError=createAction(constants.SEND_CONTACT_DETAIL_ERROR)

export const sendTryItDetailRequest=createAction(constants.SEND_TRY_IT_DETAIL_REQUEST)
export const sendTryItDetailSuccess=createAction(constants.SEND_TRY_IT_DETAIL_SUCCESS)
export const sendTryItDetailError=createAction(constants.SEND_TRY_IT_DETAIL_ERROR)

