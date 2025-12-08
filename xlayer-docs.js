/*
 * @Author: Low Ze Sheng
 * @Date: 2024-04-12 
 * @LastEditTime: 2023-07-15 4.16pm
 * @Description: X Layer doc structure
 */

module.exports = [
    {
      title: 'Developers',
      basePath: ['/developer'],
      children: [
        {
          title: 'Build on X Layer',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/build-on-xlayer/about-xlayer',

          {
            title:'Network information and contracts',
            path: '/developer/build-on-xlayer/network-information',
            children: [
                '/developer/build-on-xlayer/contracts',
              ],
          }, 

          {
            title:'Deploy a smart contract',
            path: '/developer/deploy-a-smart-contract/deploying-contract',
            children: [
                '/developer/deploy-a-smart-contract/deploy-with-hardhat',
                '/developer/deploy-a-smart-contract/deploy-with-foundry',
                '/developer/deploy-a-smart-contract/deploy-with-truffle'
              ],
          },

          {
            title:'Verify a smart contract',
            path: '/developer/verify-a-smart-contract/verifying-contract',
            children: [
                '/developer/verify-a-smart-contract/manual-verification',
                '/developer/verify-a-smart-contract/verify-with-foundry',
                '/developer/verify-a-smart-contract/verify-with-hardhat',
              ],
          },

          {
            title:'Overview',
            path: '/developer/bridge/overview',
            children: [
              '/developer/bridge/get-testnet-okb-from-faucet',
              '/developer/bridge/usdc-on-x-layer',
              ],
          },

          {
            title:'Setup RPC',
            path: '/developer/setup-rpc/overview',
            children: [
              '/developer/setup-rpc/setup-rpc',
              '/developer/setup-rpc/setup-testnet-rpc',
            ],
          },

            '/developer/rpc-endpoints/rpc-endpoints',
            '/developer/websockets-endpoints/websocket-endpoints',
          ]
        },

        {
          title: 'Tooling and infrastructure',
          icon: 'okx-defi-okbc-resources',
          children:[
            {
            title:'Tools',
            path: '/developer/tools/overview',
            children:[
            {
              title:'Account abstraction',
              path:'/developer/tools/account-abstraction-overview',
              children: [
                '/developer/tools/account-abstraction/particle-network',
                '/developer/tools/account-abstraction/safe',
              ],
            },
              '/developer/tools/block-explorers-overview',
            {
              title:'Cross-chain',
              path:'/developer/tools/cross-chain-overview',
              children: [
                '/developer/tools/cross-chain/layer-zero',
                '/developer/tools/cross-chain/connext',
              ]
            },
            {
              title:'Data indexers',
              path:'/developer/tools/data-indexers-overview',
              children: [
                '/developer/tools/data-indexers/the-graph',
                '/developer/tools/data-indexers/subquery',
                '/developer/tools/data-indexers/subsquid',
              ]
            },
            {
              title:'Developer tools',
              path:'/developer/tools/dev-tooling-overview',
              children: [
                '/developer/tools/dev-tooling/thirdweb'
              ]
            },
            {
              title:'Node providers',
              path:'/developer/tools/node-providers-overview',
              children: [
                '/developer/tools/node-providers/zan',
                '/developer/tools/node-providers/ankr',
              ]
            },
            {
              title:'Oracles',
              path:'/developer/tools/oracles-overview',
              children: [
                '/developer/tools/oracles/chainlink',
                '/developer/tools/oracles/api3',
                '/developer/tools/oracles/supraoracles',
                '/developer/tools/oracles/redstone',
              ]
            },
            {
              title:'User onboarding',
              path: '/developer/tools/user-onboarding',
              children: [
                '/developer/tools/user-onboarding/privy',
              ]
            },
            {
              title:'Safe Wallet',
              path: '/developer/build-on-xlayer/safe-wallet',
            },
          ],
        },
        ],
        },
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
            title:'Learn solidity',

            icon:'okds-guide',
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
  
    ]

