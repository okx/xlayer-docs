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
            '/developer/build-on-x1/rpc-endpoints'
        ],
        },
        {
          title: 'Smart Contract',
          icon: 'okds-records',
          children: [
          '/developer/smart-contract/deploy-with-truffle',
          '/developer/smart-contract/deploy-with-hardhat',
          '/developer/smart-contract/deploy-with-foundry',
          '/developer/smart-contract/verify-contracts'
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
          title: 'Setup zkNode',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/setup-zknode/setup-local-zknode',
            '/developer/setup-zknode/setup-production-zknode', 
          ],
        },
      ],
    },
    {
      title: 'Technology',
      basePath: ['/technology'],
      children: [
        {
          title: 'Overview',
          icon: 'okds-option',
          children: [
            '/technology/overview/x1-architecture',
          ],
        },
        {
          title: 'X1 Protocol',
          icon: 'okds-report-centre',
          children: [
            '/technology/x1-protocol/state-management',
            {
              title: 'Transactions',
              path: '/technology/x1-protocol/transactions',
              children: [
                '/technology/x1-protocol/transactions-n-data-flow',
                '/technology/x1-protocol/transactions-batching',
                '/technology/x1-protocol/batch-sequencing',
                '/technology/x1-protocol/batch-aggregation',
                '/technology/x1-protocol/transaction-validation',
              ],
            },
            '/technology/x1-protocol/incentive-model',
          ],
        },
      ],
    },
  ];