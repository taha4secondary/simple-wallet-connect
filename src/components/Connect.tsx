import { useAccount, useConnect, useDisconnect } from "wagmi";
import LoadingButton from "@mui/lab/LoadingButton";
import WalletIcon from "@mui/icons-material/Wallet";
import { Grid } from "@mui/material";

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <Grid container spacing={2}>
        {isConnected ? (
          <>
            <LoadingButton onClick={() => disconnect()} variant="outlined">
              قطع اتصال با {connector?.name}
            </LoadingButton>
          </>
        ) : (
          connectors
            .filter((x) => x.ready && x.id !== connector?.id)
            .map((x) => (
              <Grid item sm={12}>
                <LoadingButton
                  loading={isLoading && x.id === pendingConnector?.id}
                  variant="outlined"
                  key={x.id}
                  onClick={() => connect({ connector: x })}
                >
                  <WalletIcon />
                  {x.name}
                </LoadingButton>
              </Grid>
            ))
        )}
      </Grid>

      {error && <div>{error.message}</div>}
    </div>
  );
}
