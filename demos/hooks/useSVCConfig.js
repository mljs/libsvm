import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

export default function useSVCConfig() {
  const type = useWatch({ name: 'type' });
  const kernel = useWatch({ name: 'kernel' });
  const cost = useWatch({ name: 'cost' });
  const gamma = useWatch({ name: 'gamma' });
  const nu = useWatch({ name: 'nu' });
  const epsilon = useWatch({ name: 'epsilon' });
  const degree = useWatch({ name: 'degree' });

  return useMemo(
    () => ({
      type,
      kernel,
      cost,
      gamma,
      nu,
      epsilon,
      degree,
    }),
    [type, kernel, cost, gamma, nu, epsilon, degree],
  );
}
