#include "stdafx.h"

int main(){
	WSAStartup;
	WSAData wsaData;
	WORD DLLVersion = MAKEWORD(2, 1);
	if(WSAStartup(DLLVersion, &wsaData) != 0)



	return 0;
}