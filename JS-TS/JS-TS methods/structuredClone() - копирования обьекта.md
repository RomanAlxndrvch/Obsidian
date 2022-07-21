[[Копирования Обьектов и Массивов]] #methods 

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

# structuredClone()

The global **`structuredClone()`** method creates a [deep clone](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

The method also allows [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) in the original value to be _transferred_ rather than cloned to the new object. Transferred objects are detached from the original object and attached to the new object; they are no longer accessible in the original object.

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#syntax "Permalink to Syntax")

```
structuredClone(value)
structuredClone(value, transferables)
```

Copy to Clipboard

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#parameters "Permalink to Parameters")

`value`

The object to be cloned. This can be any [structured-clonable type](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).

`transferables` Optional

An array of [transferable objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects) in `value` that will be moved rather than cloned to the returned object.

### [Return value](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#return_value "Permalink to Return value")

The returned value is a [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy) of the original `value`.