/*
 * @Author: KW369 karen wong
 * @Date: 2023-10-16 14:20:40
 * @LastEditTime: 2023-03-23 12:40:21
 * @Description:X1 doc structure
 */

module.exports = [
    {
      title: 'Getting Started',
      basePath: ['/getting-started'],
      children: [
        {
          title: 'Welcome',
          icon: 'okds-finance-bank',
          children: [
            '/getting-started/welcome/welcome-to-x1',
            '/getting-started/welcome/introduction',
        ],
        },
        {
          title: 'User Guide',
          icon: 'okds-guide',
          children: [
            '/getting-started/user-guide/set-up-wallets',
            '/getting-started/user-guide/network-information',
            {
                title: 'Faucet',
                path: '/getting-started/user-guide/faucet',
                children: [
                    '/getting-started/user-guide/bridge-testnet-okb-from-goerli-to-x1',
                    '/getting-started/user-guide/get-testnet-okb-from-faucet',
                ],
            },            
            '/getting-started/user-guide/bridge',
        ],
        },
      ],
    },
    {
      title: 'Developers',
      basePath: ['/developer'],
      children: [
        {
          title: 'Build on X1',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/build-on-x1/quickstart',
            '/developer/build-on-x1/zkevm-contracts',
            '/developer/build-on-x1/bridge-to-x1',
            '/developer/build-on-x1/rpc-endpoints',
            '/developer/build-on-x1/websocket-endpoints',
            '/developer/build-on-x1/gas-station'
        ],
        },
        {
          title: 'Smart Contract',
          icon: 'okds-records',
          children: [
            {
              title: 'Deploying Contract',
              path: '/developer/smart-contract/deploying-contract',
              children: [
                '/developer/smart-contract/deploy-with-truffle',
                '/developer/smart-contract/deploy-with-hardhat',
                '/developer/smart-contract/deploy-with-foundry',
                ],
            },
            {
              title: 'Verifying Contract',
              path: '/developer/smart-contract/verifying-contract',
              children: [
                '/developer/smart-contract/manual-verification',
                '/developer/smart-contract/verify-with-hardhat'
                ],
            }
        ],
        },
        {
          title: 'Bridge',
          icon: 'okx-defi-okc-bridge',
          children: [
            '/developer/bridge/overview',
            '/developer/bridge/asset-transfer',
            '/developer/bridge/flow-of-assets',
          ],
        },
        {
          title: 'Oracle',
          icon: 'okx-defi-build-oracle',
          children: [
            '/developer/oracle/price-feed', 
          ],
        },
        {
          title: 'Subgraph',
          icon: 'okx-defi-x1-subgraph',
          children: [
            '/developer/subgraph/quickstart',
            '/developer/subgraph/creating-subgraph',
            '/developer/subgraph/deploying-subgraph'
          ],
        },
        {
          title: 'Setup zkNode',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/setup-zknode/setup-local-zknode',
            '/developer/setup-zknode/setup-production-zknode', 
          ],
        },
        {
          title:'Learn more',
          icon:'okx-defi-okbc-resources',
          children:[
            '/developer/learn-more/x1-architecture',
            '/developer/learn-more/state-management',
            {
              title: 'Transactions',
              path: '/developer/learn-more/transactions',
              children: [
                '/developer/learn-more/transactions-n-data-flow',
                '/developer/learn-more/transactions-batching',
                '/developer/learn-more/batch-sequencing',
                '/developer/learn-more/batch-aggregation',
                '/developer/learn-more/transaction-validation',
                ],
            },
            '/developer/learn-more/incentive-model'

            

          ]

        }
      ],
    },
  ];