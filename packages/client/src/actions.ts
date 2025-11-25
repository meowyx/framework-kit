import type {
	ConnectWalletParameters,
	ConnectWalletReturnType,
	DisconnectWalletParameters,
	DisconnectWalletReturnType,
	FetchAccountParameters,
	FetchAccountReturnType,
	FetchBalanceParameters,
	FetchBalanceReturnType,
	RequestAirdropParameters,
	RequestAirdropReturnType,
	SendTransactionParameters,
	SendTransactionReturnType,
	SetClusterParameters,
	SetClusterReturnType,
	SolanaClient,
} from './types';

export function connectWallet(client: SolanaClient, params: ConnectWalletParameters): ConnectWalletReturnType {
	return client.actions.connectWallet(params.connectorId, params.options);
}

export function disconnectWallet(
	client: SolanaClient,
	_params?: DisconnectWalletParameters,
): DisconnectWalletReturnType {
	void _params;
	return client.actions.disconnectWallet();
}

export function fetchAccount(client: SolanaClient, params: FetchAccountParameters): FetchAccountReturnType {
	return client.actions.fetchAccount(params.address, params.commitment);
}

export function fetchBalance(client: SolanaClient, params: FetchBalanceParameters): FetchBalanceReturnType {
	return client.actions.fetchBalance(params.address, params.commitment);
}

export function requestAirdrop(client: SolanaClient, params: RequestAirdropParameters): RequestAirdropReturnType {
	return client.actions.requestAirdrop(params.address, params.lamports);
}

export function sendTransaction(client: SolanaClient, params: SendTransactionParameters): SendTransactionReturnType {
	return client.actions.sendTransaction(params.transaction, params.commitment);
}

export function setCluster(client: SolanaClient, params: SetClusterParameters): SetClusterReturnType {
	return client.actions.setCluster(params.endpoint, params.config);
}
