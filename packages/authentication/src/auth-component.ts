// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKeys} from './keys';
import {Constructor} from '@loopback/context';
import {Component, ProviderMap} from '@loopback/core';
import {AuthenticationProvider} from './providers/authenticate';
import {AuthMetadataProvider} from './providers/auth-metadata';

export class AuthenticationComponent implements Component {
  providers?: ProviderMap;

  // TODO(bajtos) inject configuration
  constructor() {
    this.providers = {
      [BindingKeys.Authentication.AUTH_ACTION]: AuthenticationProvider,
      [BindingKeys.Authentication.METADATA]: AuthMetadataProvider,
    };
  }
}
