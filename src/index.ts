/**
 * @license
 * MIT License
 *
 * Copyright (c) 2021 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2021
 */
import { ShouldUpdate } from './useDependencyChanged';

export { default as useAsyncMemo, AsyncMemoResult } from './useAsyncMemo';
export { default as useConstant } from './useConstant';
export { default as useConstantCallback } from './useConstantCallback';
export { default as useConditionalCallback } from './useConditionalCallback';
export { default as useConditionalEffect } from './useConditionalEffect';
export { default as useConditionalLayoutEffect } from './useConditionalLayoutEffect';
export { default as useConditionalMemo } from './useConditionalMemo';
export { default as useDependencyChanged, ShouldUpdate, defaultCompare } from './useDependencyChanged';
export { default as useDependencyVersion } from './useDependencyVersion';
export { default as useForceUpdate } from './useForceUpdate';
export { default as useFreshLazyRef } from './useFreshLazyRef';
export { default as useFreshState } from './useFreshState';
export { default as useFullscreenElement } from './useFullscreenElement';
export { default as useIsomorphicEffect } from './useIsomorphicEffect';
export { default as useLazyRef } from './useLazyRef';
export { default as useMediaQuery } from './useMediaQuery';
export { default as useMountedState } from './useMountedState';
export { default as useOnlineStatus } from './useOnlineStatus';
export { default as usePageVisibility } from './usePageVisibility';
export { default as usePartialState, SetPartialState } from './usePartialState';
export { default as usePrefersDarkTheme } from './usePrefersDarkTheme';
export { default as usePrefersLightTheme } from './usePrefersLightTheme';
export { default as usePrefersReducedMotion } from './usePrefersReducedMotion';
export { default as useReadyState } from './useReadyState';
export { default as useReactiveObject } from './useReactiveObject';
export { default as useReactiveRef } from './useReactiveRef';
export { default as useRenderCount } from './useRenderCount';
export { default as useSubscription, Subscription } from './useSubscription';
export { default as useWindowScroll, WindowScroll } from './useWindowScroll';
export { default as useWindowSize, WindowSize } from './useWindowSize';

/**
 * @deprecated use useConditionalEffect
 */
export { default as useCallbackCondition } from './useConditionalCallback';

/**
 * @deprecated use useConditionalEffect
 */
export { default as useEffectCondition } from './useConditionalEffect';

/**
 * @deprecated use useConditionalEffect
 */
export { default as useMemoCondition } from './useConditionalMemo';

/**
 * @deprecated prefer to use ShouldUpdate<T>
 */
export type MemoCompare<T> = ShouldUpdate<T>;
