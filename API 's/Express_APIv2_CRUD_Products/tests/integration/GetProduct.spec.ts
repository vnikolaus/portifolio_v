import { describe, expect, test, vi } from 'vitest'
import { GetProduct } from '../../src/app/useCases/GetProduct'
import { ProductRepositoryDatabase } from '../../src/infra/repositories/implementations/ProductRepositoryDatabase'

describe('GetProduct Test', () => {
    const mockReturn = {
        id: "641d61b5-d446-4b98-80c0-34ae5762bb25",
        code: "PRD-VITEST",
        description: "PRODUTO-TESTE",
        storage: "01",
        price: "100",
        supplier: "vitest",
        barcode: "VITEST-01",
        createdAt: "2024-01-03T16:28:11.366Z",
        updatedAt: "2024-01-03T17:44:42.219Z"
    }

    test('Find a single product', async () => {
        const db = {}
        const mockRepository = new ProductRepositoryDatabase(db)
        const id = '641d61b5-d446-4b98-80c0-34ae5762bb25'
        const get = new GetProduct(mockRepository)
        const spy = vi.spyOn(get, 'exec').mockReturnValue(mockReturn)
        const output = await get.exec(id)
        expect(output).toStrictEqual(mockReturn)
        expect(spy.getMockName()).toBe('exec')
        expect(spy).toBeCalledTimes(1)
    })
})