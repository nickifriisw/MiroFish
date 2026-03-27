import service from './index'

/**
 * 开始模拟
 * @param {String} simulationId - 模拟 ID
 * @param {Object} params - 模拟参数
 * @returns {Promise}
 */
export function startSimulation(simulationId, params) {
  return service({
    url: `/api/simulation/${simulationId}/start`,
    method: 'post',
    data: params
  })
}

/**
 * 获取模拟状态
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getSimulationStatus(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}/status`,
    method: 'get'
  })
}

/**
 * 获取模拟结果
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getSimulationResult(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}/result`,
    method: 'get'
  })
}

/**
 * 获取模拟详情
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getSimulation(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}`,
    method: 'get'
  })
}

/**
 * 创建模拟
 * @param {Object} data - 模拟配置数据
 * @returns {Promise}
 */
export function createSimulation(data) {
  return service({
    url: '/api/simulation/create',
    method: 'post',
    data
  })
}

/**
 * 获取环境配置
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getEnvironment(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}/environment`,
    method: 'get'
  })
}

/**
 * 更新环境配置
 * @param {String} simulationId - 模拟 ID
 * @param {Object} data - 环境配置数据
 * @returns {Promise}
 */
export function updateEnvironment(simulationId, data) {
  return service({
    url: `/api/simulation/${simulationId}/environment`,
    method: 'put',
    data
  })
}

/**
 * 获取模拟历史
 * @returns {Promise}
 */
export function getSimulationHistory() {
  return service({
    url: '/api/simulation/history',
    method: 'get'
  })
}

/**
 * 删除模拟
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function deleteSimulation(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}`,
    method: 'delete'
  })
}

/**
 * 获取模拟报告列表
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getReports(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}/reports`,
    method: 'get'
  })
}

/**
 * 获取模拟统计数据
 * @param {String} simulationId - 模拟 ID
 * @returns {Promise}
 */
export function getSimulationStats(simulationId) {
  return service({
    url: `/api/simulation/${simulationId}/stats`,
    method: 'get'
  })
}

/**
 * 导出模拟数据
 * @param {String} simulationId - 模拟 ID
 * @param {String} format - 导出格式
 * @returns {Promise}
 */
export function exportSimulationData(simulationId, format) {
  return service({
    url: `/api/simulation/${simulationId}/export`,
    method: 'post',
    data: { format },
    responseType: 'blob'
  })
}
