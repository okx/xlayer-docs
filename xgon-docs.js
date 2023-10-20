/*
 * @Author: KW369 karen wong
 * @Date: 2023-10-16 14:20:40
 * @LastEditTime: 2023-03-23 12:40:21
 * @Description:Xgon doc structure
 */

module.exports = [
    {
      title: 'Getting Started',
      basePath: ['/getting-started'],
      children: [
        '/getting-started/welcome-to-xgon',
        '/getting-started/introduction',
        {
          title: 'User Guide',
          icon: 'xgon-user-guide',
          children: [
            '/getting-started/user-guide/set-up-wallets',
            '/getting-started/user-guide/network-information',
            {
                title: 'Faucet',
                path: '/getting-started/user-guide/faucet',
                children: [
                    '/getting-started/user-guide/bridge-testnet-okb-from-goerli-to-xgon',
                    '/getting-started/user-guide/get-testnet-okb-from-faucet',
                ],
            },            
            '/getting-started/user-guide/bridge',
        ],
        },
      ],
    },
    {
      title: 'Developer',
      basePath: ['/developer'],
      children: [
        {
          title: 'Build on Xgon',
          icon: 'xgon-build-on-xgon',
          children: [
            '/developer/build-on-xgon/quickstart',
            '/developer/build-on-xgon/zkevm-contracts',
            '/developer/build-on-xgon/bridge-to-xgon',
            '/developer/build-on-xgon/rpc-endpoints'
        ],
        },
        {
          title: 'Smart Contract',
          icon: 'xgon-smart-contract',
          children: [
          '/developer/smart-contract/deploy-with-truffle',
          '/developer/smart-contract/deploy-with-hardhat',
          '/developer/smart-contract/deploy-with-foundry',
          '/developer/smart-contract/verify-contracts'
        ],
        },
        {
          title: 'Bridge',
          icon: 'xgon-bridge',
          children: [
            '/developer/bridge/overview',
            '/developer/bridge/asset-transfer',
            '/developer/bridge/flow-of-assets',
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
          icon: 'xgon-overview',
          children: [
            '/technology/overview/xgon-architecture',
          ],
        },
        {
          title: 'Xgon Protocol',
          icon: 'xgon-protocol',
          children: [
            '/technology/xgon-protocol/state-management',
            {
              title: 'Transactions',
              path: '/technology/xgon-protocol/transactions',
              children: [
                '/technology/xgon-protocol/transactions-&-data-flow',
                '/technology/xgon-protocol/transactions-batching',
                '/technology/xgon-protocol/batch-sequencing',
                '/technology/xgon-protocol/batch-aggregation',
                '/technology/xgon-protocol/transaction-validation',
              ],
            },
            '/technology/xgon-protocol/incentive-model',
          ],
        },
      ],
    },
  ];