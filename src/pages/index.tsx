import { Container, Grid, Paper } from "@mui/material";
import { useAccount } from "wagmi";

import { Account, Connect, NetworkSwitcher } from "../components";
import { Header } from "../components/Header";

function Page() {
  const { isConnected } = useAccount();

  return (
    <Grid container>
      <Grid item md={6} sm={12} p={2}>
        <Paper className="main-container">
          <Header />

          <Connect />

          {isConnected && <Account />}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Page;
