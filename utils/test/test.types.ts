import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export type mockDispatchType = ThunkDispatch<
	{ page: { isSidebarExpanded: boolean } },
	undefined,
	AnyAction
> &
	Dispatch<any>;