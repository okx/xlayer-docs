/*
 * @Author: Low Ze Sheng
 * @Date: 2024-04-12 
 * @LastEditTime: 2023-04-12 2.25pm
 * @Description: X Layer doc structure
 */

module.exports = [
    {
      title: 'Getting started',
      basePath: ['/getting-started'],
      children: [
        {
          title: 'Welcome',
          icon: 'okds-finance-bank',
          children: [
            '/getting-started/welcome/welcome-to-xlayer',
            '/getting-started/welcome/introduction',
        ],
        },
        {
          title: 'User guide',
          icon: 'okds-guide',
          children: [
            '/getting-started/user-guide/set-up-wallets',
            '/getting-started/user-guide/network-information',
            {
                title: 'Faucet',
                path: '/getting-started/user-guide/faucet',
                children: [
                    '/getting-started/user-guide/bridge-testnet-okb-from-goerli-to-xlayer',
                    '/getting-started/user-guide/get-testnet-okb-from-faucet',
                ],
            }, 
            '/getting-started/user-guide/bridge-mainnet',           
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
          title: 'Build on X Layer',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/build-on-xlayer/quickstart',
            '/developer/build-on-xlayer/zkevm-contracts',
            'developer/buildon-xlayer/safe-contracts',
            '/developer/build-on-xlayer/bridge-to-xlayer',
            '/developer/build-on-xlayer/rpc-endpoints',
            '/developer/build-on-xlayer/websocket-endpoints',
            '/developer/build-on-xlayer/gas-station'
        ],
        },
        {
          title: 'Smart Contract',
          icon: 'okds-records',
          children: [
            {
              title: 'Deploying contract',
              path: '/developer/smart-contract/deploying-contract',
              children: [
                '/developer/smart-contract/deploy-with-truffle',
                '/developer/smart-contract/deploy-with-hardhat',
                '/developer/smart-contract/deploy-with-foundry',
                ],
            },
            {
              title: 'Verifying contract',
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
            {
              title: 'USDC on X Layer',
              path: '/developer/bridge/usdc-on-x-layer',
              children: [
                  '/developer/bridge/bridging-usdc-workflow',
              ],
          },
          ],
        },
        {
          title: 'Oracle',
          icon: 'okx-defi-build-oracle',
          children: [
            '/developer/oracle/price-feed',
            {
              title: 'Price feed interface',
              path: '/developer/oracle/price-feed-interface',
              children: [
                  '/developer/oracle/offchain-aggregator',
                  '/developer/oracle/feed-registry',
              ],
          },    
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
            '/developer/learn-more/xlayer-architecture',
            '/developer/learn-more/xlayer-protocol/state-management',
            {
              title: 'Transactions',
              path: '/developer/learn-more/xlayer-protocol/transactions',
              children: [
                '/developer/learn-more/xlayer-protocol/transactions-n-data-flow',
                '/developer/learn-more/xlayer-protocol/transactions-batching',
                '/developer/learn-more/xlayer-protocol/batch-sequencing',
                '/developer/learn-more/xlayer-protocol/batch-aggregation',
                '/developer/learn-more/xlayer-protocol/transaction-validation',
                ],
            },
            '/developer/learn-more/xlayer-protocol/incentive-model'

            

          ]

        }
      ],
    },
    {
      title: 'Academy',
      basePath: ['/academy'],
      children: [
        {
          title: 'Learn',
          icon: 'okds-finance-bank',
          children: [
            '/academy/getting-started/start-learning', 
            '/academy/getting-started/erc-20-tokens',
        ],
        },
        {
          title: 'Learn solidity',
          icon: 'okds-guide',
          children: [
            '/academy/learn-solidity/introduction-to-solidity',
            '/academy/learn-solidity/gas-fees',
            '/academy/learn-solidity/contract-size-limit',
            '/academy/learn-solidity/stack-limit',
            '/academy/learn-solidity/permanence',
            '/academy/learn-solidity/update-frequency',
        ],
        },
        {
          title: 'Try remix',
          icon: 'okds-guide',
          children: [
            '/academy/try-remix/remix-overview',
            '/academy/try-remix/features',
            '/academy/try-remix/tutorial-guide'
        ],
        },
      ],
    },
    {
      title: 'Tools',
      basePath: ['/tools'],
      children: [
        {
          title: 'Tools',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/tools/account-abstraction', 
            '/tools/block-explorers',
            '/tools/cross-chain',
            '/tools/data-indexers',
            '/tools/dev-tooling',
            '/tools/oracles',
            '/tools/node-providers',
            '/tools/user-onboarding'
        ],
        },
      ],
    },
  ];